-- Run once in Neon SQL Editor (free tier): https://console.neon.tech
CREATE TABLE IF NOT EXISTS contact (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  program_interest VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS contact_created_at_idx
  ON contact (created_at DESC);
