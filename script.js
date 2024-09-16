const shareButtons = document.querySelectorAll('.title-share-button');

async function copytext(e){
    e.preventDefault()
    const link = this.getAttribute('link');
    try{
        await navigator.clipboard.writeText(link);
        alert(`copied the text: ${link}`)
    } catch (err){
        console.error(err);
    }
    
}

shareButtons.forEach(shareButtons => shareButtons.addEventListener('click',copytext))

const share = document.querySelector('.share-button');
async function copy(a){
    e.preventDefault()
    const link = this.getAttribute('link');
    try{
        await navigator.clipboard.writeText(link);
        alert(`copied the text: ${link}`)
    } catch (err){
        console.error(err);
    }
}

share.addEventListener('click',copytext)
