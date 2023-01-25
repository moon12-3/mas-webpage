function Video() {
    return (
        <div id="video-box" class="video-box">
            <video autoPlay muted id = "video" class ="video">
                <source src="video/main composition_10초.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Video;