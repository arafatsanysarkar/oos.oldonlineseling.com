// সঠিক ছাত্রের আইডি এবং পাসওয়ার্ডগুলোর একটি অবজেক্ট
const validCredentials = {
    "sany@gmail.com": "1234",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
    "11": "11",
    "S12": "12",
    "13": "13",
    "14": "14",
    "15": "115",
    "16": "16",
    "17": "17",
    "18": "18",
    "19": "19",
    "20": "20",
    "21": "22",
    "22": "22",
    "23": "23",
    "24": "24",
    "25": "25",
    "26": "26",
    "27": "27",
    "28": "28",
    "29": "29"
};

// ফর্ম সাবমিশনের ইভেন্ট হ্যান্ডলার
function handleLogin(event) {
    event.preventDefault(); // ডিফল্ট ফর্ম সাবমিশন বন্ধ

    const email = document.querySelector('input[name="email"]').value.trim(); // ব্যবহারকারীর আইডি
    const password = document.querySelector('input[name="password"]').value.trim(); // ব্যবহারকারীর পাসওয়ার্ড

    // যাচাই করা
    if (validCredentials[email] && validCredentials[email] === password) {
        alert;
        // হোমপেজে রিডিরেক্ট করুন
        window.location.href = "index.html"; // এখানে আপনার হোমপেজের লিঙ্ক দিন
    } else {
        alert("ভুল আইডি বা পাসওয়ার্ড। দয়া করে আবার চেষ্টা করুন।");
    }
}

// ইভেন্ট লিসেনার যোগ করা
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form'); // আপনার ফর্ম ট্যাগ নির্বাচন
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
