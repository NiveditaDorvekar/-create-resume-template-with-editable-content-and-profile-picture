function loadFile(event) {
    const image = document.getElementById('profile-img');
    image.src = URL.createObjectURL(event.target.files[0]); 
    image.onload = function() {
        URL.revokeObjectURL(image.src); 
    }
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');

    doc.html(document.querySelector('#resume'), {
        callback: function (doc) { 
            doc.save('resume.pdf'); 
        },
        margin: [10, 10, 10, 10], 
        autoPaging: 'text', 
        x: 0, 
        y: 0
    });
}
