// Snippet 25 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Data Types Revisited (\texttt{jsonb
// Source: Backend Interaction (REST APIs and Supabase_SQL)/SQL Deep Dive with PostgreSQL.tex (line 253)
// Language: sql
// Description: -- Assuming a 'settings' table with a 'preferences...
// 
-- Assuming a 'settings' table with a 'preferences' jsonb column
-- preferences might look like: {"theme": "dark", "notifications": {"email": true, "sms": false}}

-- Get the theme value as text
SELECT preferences ->> 'theme' FROM settings WHERE id = 1; -- Returns 'dark'

-- Get the email notification setting as boolean (needs casting)
SELECT (preferences -> 'notifications' ->> 'email')::boolean FROM settings WHERE id = 1; -- Returns true

-- Get nested value using path as text
SELECT preferences #>> '{notifications,sms}' FROM settings WHERE id = 1; -- Returns 'false'

-- Find settings where email notifications are enabled
SELECT * FROM settings WHERE preferences @> '{"notifications": {"email": true}}';

-- Find settings that have a 'theme' key
SELECT * FROM settings WHERE preferences ? 'theme';