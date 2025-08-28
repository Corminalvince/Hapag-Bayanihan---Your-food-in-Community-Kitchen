-- Hapag Bayanihan Database Schema
-- Create database
CREATE DATABASE IF NOT EXISTS hapag_bayanihan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hapag_bayanihan;

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    province VARCHAR(100),
    postal_code VARCHAR(10),
    user_type ENUM('requester', 'driver', 'kitchen_admin', 'admin') NOT NULL DEFAULT 'requester',
    status ENUM('active', 'inactive', 'suspended') NOT NULL DEFAULT 'active',
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Community kitchens table
CREATE TABLE kitchens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    contact_phone VARCHAR(20),
    contact_email VARCHAR(255),
    operating_hours JSON,
    capacity_per_day INT DEFAULT 0,
    admin_id INT,
    status ENUM('active', 'inactive', 'pending') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Food requests table
CREATE TABLE food_requests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    requester_id INT NOT NULL,
    kitchen_id INT,
    meal_type ENUM('breakfast', 'lunch', 'dinner', 'snack') NOT NULL,
    requested_date DATE NOT NULL,
    requested_time TIME NOT NULL,
    number_of_meals INT NOT NULL DEFAULT 1,
    special_instructions TEXT,
    dietary_restrictions TEXT,
    delivery_address TEXT,
    delivery_city VARCHAR(100),
    delivery_province VARCHAR(100),
    delivery_postal_code VARCHAR(10),
    delivery_latitude DECIMAL(10, 8),
    delivery_longitude DECIMAL(11, 8),
    status ENUM('pending', 'approved', 'assigned', 'picked_up', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
    priority ENUM('low', 'normal', 'high', 'urgent') NOT NULL DEFAULT 'normal',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (requester_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (kitchen_id) REFERENCES kitchens(id) ON DELETE SET NULL
);

-- Drivers table
CREATE TABLE drivers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    license_number VARCHAR(50) NOT NULL,
    vehicle_type VARCHAR(100),
    vehicle_plate VARCHAR(20),
    vehicle_capacity INT DEFAULT 1,
    service_area TEXT,
    availability_hours JSON,
    status ENUM('available', 'busy', 'offline') NOT NULL DEFAULT 'offline',
    rating DECIMAL(3, 2) DEFAULT 0.00,
    total_deliveries INT DEFAULT 0,
    background_check_status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    background_check_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Deliveries table
CREATE TABLE deliveries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    request_id INT NOT NULL,
    driver_id INT,
    pickup_time TIMESTAMP,
    estimated_delivery_time TIMESTAMP,
    actual_delivery_time TIMESTAMP,
    pickup_notes TEXT,
    delivery_notes TEXT,
    status ENUM('assigned', 'picked_up', 'in_transit', 'delivered', 'failed') NOT NULL DEFAULT 'assigned',
    rating TINYINT CHECK (rating >= 1 AND rating <= 5),
    feedback TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (request_id) REFERENCES food_requests(id) ON DELETE CASCADE,
    FOREIGN KEY (driver_id) REFERENCES drivers(id) ON DELETE SET NULL
);

-- Notifications table
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type ENUM('info', 'success', 'warning', 'error') NOT NULL DEFAULT 'info',
    is_read BOOLEAN DEFAULT FALSE,
    related_table VARCHAR(50),
    related_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Statistics tracking table
CREATE TABLE statistics (
    id INT PRIMARY KEY AUTO_INCREMENT,
    metric_name VARCHAR(100) NOT NULL,
    metric_value INT NOT NULL DEFAULT 0,
    date_recorded DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_metric_date (metric_name, date_recorded)
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_type ON users(user_type);
CREATE INDEX idx_kitchens_location ON kitchens(city, province);
CREATE INDEX idx_food_requests_status ON food_requests(status);
CREATE INDEX idx_food_requests_date ON food_requests(requested_date);
CREATE INDEX idx_drivers_status ON drivers(status);
CREATE INDEX idx_deliveries_status ON deliveries(status);
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);

-- Insert default admin user
INSERT INTO users (email, password_hash, first_name, last_name, user_type, email_verified) 
VALUES ('admin@hapagbayanihan.org', '$argon2id$v=19$m=65536,t=4,p=3$example', 'Admin', 'User', 'admin', TRUE);

-- Insert demo users
INSERT INTO users (email, password_hash, first_name, last_name, phone, address, city, province, user_type, email_verified) VALUES
('demo@hapagbayanihan.org', '$argon2id$v=19$m=65536,t=4,p=3$example', 'Demo', 'User', '+639123456789', '123 Sample St', 'Manila', 'Metro Manila', 'requester', TRUE),
('driver@hapagbayanihan.org', '$argon2id$v=19$m=65536,t=4,p=3$example', 'Demo', 'Driver', '+639987654321', '456 Driver Ave', 'Quezon City', 'Metro Manila', 'driver', TRUE),
('kitchen@hapagbayanihan.org', '$argon2id$v=19$m=65536,t=4,p=3$example', 'Kitchen', 'Admin', '+639111222333', '789 Kitchen Rd', 'Makati', 'Metro Manila', 'kitchen_admin', TRUE);

-- Insert sample kitchens
INSERT INTO kitchens (name, description, address, city, province, contact_phone, operating_hours, capacity_per_day, admin_id, status) VALUES
('Barangay Community Kitchen', 'Serving hot meals daily to families in need', '123 Barangay Hall, Brgy. 1', 'Manila', 'Metro Manila', '+639123456789', '{"monday": "8:00-18:00", "tuesday": "8:00-18:00", "wednesday": "8:00-18:00", "thursday": "8:00-18:00", "friday": "8:00-18:00", "saturday": "8:00-16:00", "sunday": "closed"}', 100, 3, 'active'),
('Hope Kitchen Quezon City', 'Providing nutritious meals for the community', '456 Hope Street, Brgy. Central', 'Quezon City', 'Metro Manila', '+639987654321', '{"monday": "9:00-17:00", "tuesday": "9:00-17:00", "wednesday": "9:00-17:00", "thursday": "9:00-17:00", "friday": "9:00-17:00", "saturday": "9:00-15:00", "sunday": "closed"}', 150, 3, 'active');

-- Insert sample driver
INSERT INTO drivers (user_id, license_number, vehicle_type, vehicle_plate, vehicle_capacity, service_area, availability_hours, status, background_check_status) VALUES
(2, 'D12-34-567890', 'Motorcycle', 'ABC 1234', 2, 'Metro Manila', '{"monday": "8:00-20:00", "tuesday": "8:00-20:00", "wednesday": "8:00-20:00", "thursday": "8:00-20:00", "friday": "8:00-20:00", "saturday": "8:00-18:00", "sunday": "10:00-16:00"}', 'available', 'approved');

-- Insert initial statistics
INSERT INTO statistics (metric_name, metric_value, date_recorded) VALUES
('meals_delivered', 1200, CURDATE()),
('active_kitchens', 50, CURDATE()),
('active_volunteers', 300, CURDATE()),
('neighborhoods_served', 25, CURDATE());