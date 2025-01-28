function showForm(formId) {
    // সব ফর্ম-বক্স থেকে active ক্লাস রিমুভ করা
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    // সিলেক্ট করা ফর্মে active ক্লাস যোগ করা
    document.getElementById(formId).classList.add("active");
}
