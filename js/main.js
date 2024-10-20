// Course navigation logic
function navigateToCourse() {
    const coursesearch = document.getElementById("course");
    const selectedCourse = coursesearch.value;

    // Redirect to the corresponding course page
    switch (selectedCourse) {
        case "Matematika":
            window.location.href = "pages/matematika.html";
            break;
        case "Fisika":
            window.location.href = "pages/fisika.html";
            break;
        case "Kimia":
            window.location.href = "pages/kimia.html";
            break;
        case "Berpikir Komputational":
            window.location.href = "pages/pengkom.html";
            break;
        case "Literasi Digital dan AI":
            window.location.href = "pages/litdig.html";
            break;
        case "Olahraga":
            window.location.href = "pages/olahraga.html";
            break;
        case "Pancasila":
            window.location.href = "pages/pancasila.html";
            break;
        case "Bahasa Inggris":
            window.location.href = "pages/english.html";
            break;
        case "Bahasa Indonesia":
            window.location.href = "pages/bahasa.html";
            break;
        default:
            alert("Please select a valid course from the list." + selectedCourse + coursesearch);
            return false;
    }

    // Prevent form submission
    return false;
}