import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"padding": "140px 0",
	"sm-padding": "40px 0",
	"background": "url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"max-width": "240px",
			"padding": "50px 80px 80px 50px",
			"background": "--color-light",
			"color": "--dark"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h4",
			"font": "--base",
			"color": "--grey",
			"letter-spacing": "1px",
			"text-transform": "uppercase",
			"margin": "6px 0",
			"children": "About me"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline2",
			"margin": "0 0 12px 0",
			"children": "Hey I’m David"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"children": "My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards."
		}
	}
};

const Block3 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
			<Text {...override("text2")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Block3, { ...Section,
	defaultProps,
	overrides
});
export default Block3;