document.getElementById('read-more').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Read More';
    }
});

document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
});