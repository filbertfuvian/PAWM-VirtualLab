function validateCourse() {
    const input = document.getElementById('course');
    const validCourses = [
        "Matematika",
        "Fisika",
        "Kimia",
        "Berpikir Komputational",
        "Literasi Digital dan AI",
        "Olahraga",
        "Bahasa Inggris",
        "Bahasa Indonesia"
    ];

    if (!validCourses.includes(input.value)) {
        alert("Please select a valid course from the list.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}