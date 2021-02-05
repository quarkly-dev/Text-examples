import React from "react";
import { useOverrides, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"padding": "140px 0",
	"sm-padding": "40px 0",
	"background": "linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80) 50% 15%/cover",
	"color": "--light",
	"font": "--base"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"margin": "0 0 96px 0",
			"text-align": "center",
			"letter-spacing": "50px",
			"text-transform": "uppercase",
			"font": "100 132px/1.2 --fontFamily-sans",
			"lg-font": "200 42px/1.2 --fontFamily-sans",
			"lg-letter-spacing": "20px",
			"children": <>
				Mary
				<br />
				Cornell
			</>
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%",
			"font": "--lead",
			"text-transform": "uppercase",
			"letter-spacing": "1px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "About me"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "My name is Mary Cornell, born and raised in France."
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "I've been working as a professional photographer and videographer for more than 12 years."
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "CDS Documentary Essay Prize and Best Photographer of The Year 2019 by Sony World Photography Awards."
		}
	}
};

const Block8 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
		</Box>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Text {...override("text1")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Text {...override("text2")} />
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Text {...override("text3")} />
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Text {...override("text4")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Block8, { ...Section,
	defaultProps,
	overrides
});
export default Block8;