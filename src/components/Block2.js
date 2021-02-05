import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"text-align": "center",
	"background-color": "--primary",
	"color": "--light",
	"padding": "100px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h5",
			"font": "--lead",
			"margin": "10px 0 0 0",
			"text-transform": "uppercase",
			"letter-spacing": "5px",
			"children": "Second to none"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "10px 0 0 0",
			"children": "About Us"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "40px 0 20px 0",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are."
		}
	}
};

const Block2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		{children}
	</Section>;
};

Object.assign(Block2, { ...Section,
	defaultProps,
	overrides
});
export default Block2;