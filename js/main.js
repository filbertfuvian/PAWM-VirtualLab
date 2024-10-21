// Course navigation logic
function navigateToCourse() {
    const coursesearch = document.getElementById("course");
    const selectedCourse = coursesearch.value;

    switch (selectedCourse) {
        case "Matematika":
            window.location.href = "courses.html";
            break;
        case "Fisika":
            window.location.href = "courses.html#fisika";
            break;
        case "Kimia":
            window.location.href = "courses.html#kimia";
            break;
        case "Berpikir Komputational":
            window.location.href = "courses.html#pengkom";
            break;
        case "Literasi Digital dan AI":
            window.location.href = "courses.html#litdig";
            break;
        case "Olahraga":
            window.location.href = "courses.html#olahraga";
            break;
        case "Pancasila":
            window.location.href = "courses.html#pancasila";
            break;
        case "Bahasa Inggris":
            window.location.href = "courses.html#english";
            break;
        case "Bahasa Indonesia":
            window.location.href = "courses.html#bahasa";
            break;
        default:
            alert("Please select a valid course from the list.");
            return false;
    }

    return false;
}

// function buttonToCourse { 
//     const courseButtton = document.getElementById("courseButton");
//     const selectedCourse = courseButtton.value;
//     switch (selectedCourse) {
//         case "Matematika":
//             window.location.href = "pages/matematika.html";
//             break;
//         case "Fisika":
//             window.location.href = "pages/fisika.html";
//             break;
//         case "Kimia":
//             window.location.href = "pages/kimia.html";
//             break;
//         case "Berpikir Komputational":
//             window.location.href = "pages/pengkom.html";
//             break;
//         case "Literasi Digital dan AI":
//             window.location.href = "pages/litdig.html";
//             break;
//         case "Olahraga":
//             window.location.href = "pages/olahraga.html";
//             break;
//         case "Pancasila":
//             window.location.href = "pages/pancasila.html";
//             break;
//         case "Bahasa Inggris":
//             window.location.href = "pages/english.html";
//             break;
//         case "Bahasa Indonesia":
//             window.location.href = "pages/bahasa.html";
//             break;
//     }   
// }
// // 