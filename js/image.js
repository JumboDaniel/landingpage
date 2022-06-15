const image_input = document.querySelector("#image-input");


image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {

    const uploaded_image = reader.result;
    
    if(uploaded_image.includes('data:video/mp4') ){
        const source = document.createElement('source');
        source.src = uploaded_image;
        source.type = 'video/mp4';
        const video = document.createElement('video');
        video.controls = true
        video.appendChild(source);
        document.querySelector("#display-image").appendChild(video)
        console.log(uploaded_image)
    }else{
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    }
  });
  reader.readAsDataURL(this.files[0]);
});