import React, { Component } from 'react';
import { Svg, G, Path, Defs, ClipPath } from "react-native-svg"

export default class Close extends Component {
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
            <Path
              d="M12.606 10l3.91-3.909c.479-.48.479-1.257 0-1.737l-.87-.87a1.229 1.229 0 00-1.737 0L10 7.395l-3.909-3.91a1.229 1.229 0 00-1.737 0l-.87.87c-.479.48-.479 1.257 0 1.737L7.395 10l-3.91 3.909c-.479.48-.479 1.257 0 1.737l.87.87c.48.479 1.257.479 1.737 0L10 12.605l3.909 3.91c.48.479 1.258.479 1.737 0l.87-.87c.479-.48.479-1.257 0-1.737L12.605 10z"
              fill="#B3B6B8"
            />
          </Svg>
        )
    }
}

