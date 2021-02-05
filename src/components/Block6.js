import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-darkL2",
	"padding": "64px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"margin-right": "-20%",
			"padding-bottom": "120%",
			"background": "url(https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) 50% 15%/cover",
			"lg-margin-right": "0",
			"lg-padding-bottom": "80%"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "98px 64px",
			"margin-left": "-20%",
			"margin-top": "36px",
			"background": "--color-red",
			"color": "--light",
			"mix-blend-mode": "lighten",
			"lg-margin-left": "0",
			"lg-margin-top": "0",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h4",
			"margin": "0",
			"font": "--base",
			"letter-spacing": "1px",
			"text-transform": "uppercase",
			"children": "About me"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"margin": "0 0 16px 0",
			"font": "--headline1",
			"lg-font": "--headline2",
			"children": "Hey I’m David"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "16px 0",
			"font": "--base",
			"max-width": "400px",
			"children": "My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards."
		}
	}
};

const Block6 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Text {...override("text")} />
				<Text {...override("text1")} />
				<Text {...override("text2")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Block6, { ...Section,
	defaultProps,
	overrides
});
export default Block6;