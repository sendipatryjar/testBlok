import React, { Component } from 'react';
import { Svg, G, Path, Defs, ClipPath } from "react-native-svg"

export default class Bar extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { width = 25, height = 24, fill = '#444' } = this.props;
        return (
            <Svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"

            >
                <G clipPath="url(#clip0_102_245)">
                    <Path
                        d="M2.571 5.571H17.43A.571.571 0 0018 5V3.571A.571.571 0 0017.429 3H2.57A.571.571 0 002 3.571V5c0 .316.256.571.571.571zm0 5.715H17.43a.571.571 0 00.571-.572V9.286a.571.571 0 00-.571-.572H2.57A.571.571 0 002 9.286v1.428c0 .316.256.572.571.572zm0 5.714H17.43a.571.571 0 00.571-.571V15a.571.571 0 00-.571-.571H2.57A.571.571 0 002 15v1.429c0 .315.256.571.571.571z"
                        fill="#B3B6B8"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_102_245">
                        <Path fill="#fff" transform="translate(2 3)" d="M0 0H16V14H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        )
    }
}