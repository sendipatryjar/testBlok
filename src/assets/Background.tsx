import React, { Component } from 'react';
import { Svg, Path, Mask, G } from "react-native-svg"

export default class Background extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { width = 25, height = 24, fill = '#444' } = this.props;
        return (
            <Svg
                width={360}
                height={804}
                viewBox="0 0 360 804"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"

            >
                <Path fill="#FFCB3B" d="M0 0.00488281H360V803.99988281H0z" />
                <Mask
                    id="a"
                    style={{
                        maskType: "alpha"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={402}
                    width={360}
                    height={402}
                >
                    <Path fill="#FFE59D" d="M0 402H360V804H0z" />
                </Mask>
                <G mask="url(#a)">
                    <Path
                        d="M360 554c-66.826 0-121 55.964-121 125 0 69.035 54.174 125 121 125"
                        stroke="#FFD86C"
                        strokeWidth={120}
                        strokeLinecap="round"
                    />
                </G>
                <Mask
                    id="b"
                    style={{
                        maskType: "alpha"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={360}
                    height={402}
                >
                    <Path
                        transform="rotate(-180 360 402)"
                        fill="#FFE59D"
                        d="M360 402H720V804H360z"
                    />
                </Mask>
                <G mask="url(#b)">
                    <Path
                        d="M0 250c66.826 0 121-55.965 121-125C121 55.964 66.826 0 0 0"
                        stroke="#FFD86C"
                        strokeWidth={120}
                        strokeLinecap="round"
                    />
                </G>
            </Svg>
        )
    }
}