// Snippet 55 from Chapter 7
// Section: Database Management \& Performance
// Subsection: Indexing Strategies
// Language: sql
// Description: -- Create a standard B-tree index on the email col...
// 
-- Create a standard B-tree index on the email column (often used in WHERE)
CREATE INDEX idx_users_on_email ON users (email);

-- Create a unique index to enforce email uniqueness and speed up lookups
CREATE UNIQUE INDEX idx_users_on_unique_email ON users (email);

-- Create a multi-column index (order matters for some queries)
CREATE INDEX idx_orders_on_user_date ON orders (user_id, order_date DESC);

-- Create a GIN index on a jsonb column for containment queries
CREATE INDEX idx_settings_on_prefs ON settings USING GIN (preferences);

-- Create a GIN index on a text array column for containment queries
CREATE INDEX idx_posts_on_tags ON posts USING GIN (tags);