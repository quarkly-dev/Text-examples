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
			"color": "--dark",
			"padding": "98px 64px",
			"background": "--color-light",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h4",
			"margin": "12px 0",
			"font": "--base",
			"color": "--grey",
			"letter-spacing": "1px",
			"text-transform": "uppercase",
			"children": "About Zanzibar"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"margin": "12px 0",
			"font": "--headline2",
			"md-font": "--headline3",
			"children": "This is one of the world's greatest cultural crossroads where Africa meets the Indian Ocean."
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
			"flex-direction": "column"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"lg-width": "33.3%",
			"md-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding-bottom": "100%",
			"background": "url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "33.3%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding-bottom": "100%",
			"background": "url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "33.3%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride4": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding-bottom": "100%",
			"background": "url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover"
		}
	}
};

const Block5 = props => {
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
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Stack {...override("stack1")}>
					<StackItem {...override("stackItem2")}>
						<Override {...override("stackItemOverride2")} />
					</StackItem>
					<StackItem {...override("stackItem3")}>
						<Override {...override("stackItemOverride3")} />
					</StackItem>
					<StackItem {...override("stackItem4")}>
						<Override {...override("stackItemOverride4")} />
					</StackItem>
				</Stack>
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Block5, { ...Section,
	defaultProps,
	overrides
});
export default Block5;