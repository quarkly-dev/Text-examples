import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Icon, Box } from "@quarkly/widgets";
import { MdArrowDownward } from "react-icons/md";
const defaultProps = {
	"background": "linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover",
	"padding": "64px 0",
	"sm-padding": "40px 0",
	"color": "--light",
	"font": "--base"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "75%",
			"lg-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--lightD2",
			"letter-spacing": "1px",
			"text-transform": "uppercase",
			"margin": "0",
			"children": "Excellence in everything"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "10px 0",
			"children": "Striving for perfection in everything we do. Unparalleled service for everyone."
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"text-align": "center",
			"margin": "96px 0 0 0"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "8px 0",
			"text-transform": "uppercase",
			"children": "Who we are"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"margin": "0 auto",
			"icon": MdArrowDownward
		}
	}
};

const Block7 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Text {...override("text")} />
				<Text {...override("text1")} />
			</StackItem>
		</Stack>
		<Box {...override("box")}>
			<Text {...override("text2")} />
			<Icon {...override("icon")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Block7, { ...Section,
	defaultProps,
	overrides
});
export default Block7;