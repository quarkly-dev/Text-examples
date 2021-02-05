import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Button, Box } from "@quarkly/widgets";
import { MdAccessibility } from "react-icons/md";
const defaultProps = {
	"width": "100%",
	"border-radius": "8px",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"justify-content": "center",
	"box-sizing": "border-box",
	"padding": "48px 36px 72px 36px",
	"opacity": "1",
	"hover-background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%",
	"transition": "background 0.3s ease 0s",
	"sm-padding": "36px 36px 48px 36px",
	"background": "rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%) center/100%"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdAccessibility,
			"font": "64px sans-serif",
			"color": "--light",
			"md-font": "54px sans-serif",
			"sm-font": "36px sans-serif"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed",
			"text-transform": "uppercase",
			"color": "--light",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"md-font": "normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Лес и горы"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"color": "--lightD2",
			"float": "left",
			"text-align": "center",
			"md-font": "normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-margin": "10px 0px 4px 0px",
			"md-margin": "16px 0px 8px 0px",
			"children": <>
				ыфвф ывыв фыв{" "}
			</>
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"background": "--color-red",
			"color": "--darkL2",
			"padding": "12px 34px 12px 34px",
			"border-radius": "24px",
			"text-transform": "uppercase",
			"letter-spacing": "1.2px",
			"margin": "24px 0px 0px 0px",
			"opacity": "1",
			"box-shadow": "0 12px 3px -4px rgba(3, 18, 7, 0.3)",
			"md-font": "normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-padding": "12px 18px 12px 18px",
			"children": "Присоединиться"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"background": "--color-red",
			"color": "--darkL2",
			"padding": "12px 34px 12px 34px",
			"border-radius": "24px",
			"text-transform": "uppercase",
			"letter-spacing": "1.2px",
			"margin": "24px 0px 0px 0px",
			"opacity": "1",
			"box-shadow": "0 12px 3px -4px rgba(3, 18, 7, 0.3)",
			"md-font": "normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-padding": "12px 18px 12px 18px",
			"font": "normal 300 15.9px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Присоединиться"
		}
	}
};

const NewComp1 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Button {...override("button")} />
		<Button {...override("button1")} />
		{children}
	</Box>;
};

Object.assign(NewComp1, { ...Box,
	defaultProps,
	overrides
});
export default NewComp1;