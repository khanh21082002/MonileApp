import React,{useState} from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import YouTube from "react-native-youtube";

export default YouTubeScreen = () => {
    const [isReady, setIsReady] = useState(false);
    const [status, setStatus] = useState({});
    const [quality, setQuality] = useState({});
    const [error, setError] = useState(null);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>YouTube</Text>
            </View>
            <YouTube
                    videoId="KVZ-P-ZI6W4" // The YouTube video ID
                    play // control playback of video with true/false
                    fullscreen // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    onReady={e => setIsReady(true)}
                    onChangeState={e => setStatus(e.state)}
                    onChangeQuality={e => setQuality(e.quality)}
                    onError={e => setError(e.error)}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
        </SafeAreaView>
    )
}