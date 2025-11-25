CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    role VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert 50 dummy users using generate_series
INSERT INTO users (name, email, role)
SELECT 
    'User ' || i, 
    'user' || i || '@example.com', 
    CASE WHEN i % 5 = 0 THEN 'admin' ELSE 'subscriber' END
FROM generate_series(1, 50) AS i;