import axios from 'axios';

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZWJrcnF4aGZkaXN6aG5xY3p1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTM1MTg4NywiZXhwIjoyMDQ0OTI3ODg3fQ.evF9NHEOqRNk1QAzIjxn_F8VMMZPYF1m57ueWpryYI4";
export const api  = axios.create({
    baseURL: 'https://izebkrqxhfdiszhnqczu.supabase.co/rest/v1',
    headers: {
        apikey: API_KEY,
        authorization: `Bearer ${API_KEY}`
    }
})

//1f7gdK1CKKw9T5SU