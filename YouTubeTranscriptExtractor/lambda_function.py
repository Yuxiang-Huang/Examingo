from youtube_transcript_api import YouTubeTranscriptApi

# Use this js function to get the video id from the url
# function youtube_parser(url){
#     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
#     var match = url.match(regExp);
#     return (match&&match[7].length==11)? match[7] : false;
# }

video_id = "dQw4w9WgXcQ"

transcript = YouTubeTranscriptApi.get_transcript(video_id)

print(transcript)