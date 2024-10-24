function displayVideo() {
    let selectMateri = document.getElementById("video-materi");
    let pilihan = selectMateri.value;
    let matkul = selectMateri.name;
    let videoContainer = document.getElementById("video-container");
    let video = document.getElementById("video");

    let videopath = `../assets/videomateri/${matkul}/${pilihan}.mp4`;
    
    if (pilihan === ""){
        video.src = "";
        videoContainer.style.display = "none";
    }
    else{
        video.src = videopath;
        videoContainer.style.display = "block"
    }
}

function displayDokumen() {
    let selectMateri = document.getElementById("dokumen-materi");
    let pilihan = selectMateri.value;
    let matkul = selectMateri.name;
    let dokumenContainer = document.getElementById("dokumen-container");
    let dokumen = document.getElementById("dokumen");

    let dokumenpath = `../assets/dokumenmateri/${matkul}/${pilihan}.pdf`;
    // alert(dokumenpath);
    if (pilihan === ""){
        dokumen.src = "";
        dokumenContainer.style.display = "none";
    }
    else{
        dokumen.src = dokumenpath;
        dokumenContainer.style.display = "block"
    }
}

// function calculateBMI(){
//     let height = document.getElementById("height").value / 100;
//     let weight = document.getElementById("weight").value;
//     var result = weight / (height * height);

//     switch(result){
//         case result < 18.5:
//             document.getElementById("bmi-result").textContent = "Anda Underweight";
//             break;
//         case result < 24.9:
//             document.getElementById("bmi-result").textContent = "Anda Normal";
//             break;
//         case result < 29.9:
//             document.getElementById("bmi-result").textContent = "Anda Overweight";
//             break;
//         case result < 34.9:
//             document.getElementById("bmi-result").textContent = "Anda Obese";
//             break;
//         default:
//             document.getElementById("bmi-result").textContent = "Anda Extremely Obese";
//     }
// }
    // if (pilihan === "1") {
    //     video.src = '../assets/videomateri/${matkul}/1.mp4'; 
    //     videoContainer.style.display = "block";
    // } else if (pilihan === "2") {
    //     video.src = '../assets/videomateri/${matkul}/2.mp4';
    //     videoContainer.style.display = "block";
    // } else if (pilihan === "3") {
    //     video.src = '../assets/videomateri/${matkul}/3.mp4'; 
    //     videoContainer.style.display = "block";
    // } else {
    //     video.src = "";
    //     videoContainer.style.display = "none";
    // }

    // switch(matkul){
    //     case "materimatematika" :
    //         if (pilihan === "1") {
    //             video.src = "'../assets/videomateri'+; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "../assets/videomateri/matematika/2.mp4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "../assets/videomateri/matematika/3.mp4"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materifisika" :
    //         if (pilihan === "1") {
    //             video.src = "https://www.youtube.com/embed/5hVmeOCJjOU"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "https://www.youtube.com/embed/Q1P-HX5khX4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "https://www.youtube.com/embed/Tk5WHUVGgV0"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materikimia" :
    //         if (pilihan === "1") {
    //             video.src = "https://www.youtube.com/embed/5hVmeOCJjOU"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "https://www.youtube.com/embed/Q1P-HX5khX4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "https://www.youtube.com/embed/Tk5WHUVGgV0"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materipengkom" :
    //         if (pilihan === "1") {
    //             video.src = "https://www.youtube.com/embed/5hVmeOCJjOU"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "https://www.youtube.com/embed/Q1P-HX5khX4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "https://www.youtube.com/embed/Tk5WHUVGgV0"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materibahasa" :
    //         if (pilihan === "1") {
    //             video.src = "../assets/videomateri/matematika/1.mp4"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "../assets/videomateri/matematika/2.mp4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "../assets/videomateri/matematika/3.mp4"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materienglish" :
    //         if (pilihan === "1") {
    //             video.src = "https://www.youtube.com/embed/5hVmeOCJjOU"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "https://www.youtube.com/embed/Q1P-HX5khX4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "https://www.youtube.com/embed/Tk5WHUVGgV0"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materilitdig" :
    //         if (pilihan === "1") {
    //             video.src = "https://www.youtube.com/embed/5hVmeOCJjOU"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "https://www.youtube.com/embed/Q1P-HX5khX4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "https://www.youtube.com/embed/Tk5WHUVGgV0"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materiolahraga" :
    //         if (pilihan === "1") {
    //             video.src = "https://www.youtube.com/embed/5hVmeOCJjOU"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "https://www.youtube.com/embed/Q1P-HX5khX4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "https://www.youtube.com/embed/Tk5WHUVGgV0"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break;
    //     case "materipancasila" :
    //         if (pilihan === "1") {
    //             video.src = "https://www.youtube.com/embed/5hVmeOCJjOU"; 
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "2") {
    //             video.src = "https://www.youtube.com/embed/Q1P-HX5khX4";
    //             videoContainer.style.display = "block";
    //         } else if (pilihan === "3") {
    //             video.src = "https://www.youtube.com/embed/Tk5WHUVGgV0"; 
    //             videoContainer.style.display = "block";
    //         } else {
    //             video.src = "";
    //             videoContainer.style.display = "none";
    //         }
    //         break; 
    // }
