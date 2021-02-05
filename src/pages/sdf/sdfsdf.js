import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Icon, List, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, StackItem, Stack, Menu } from "@quarkly/components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"sdf/sdfsdf"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Box display="flex" width="100%" justify-content="space-between" margin="0px 0px 70px 0px">
				<Box
					width="100px"
					height="100px"
					background="--color-lightD2"
					box-shadow="--m"
					display="flex"
					align-items="center"
					justify-content="center"
				>
					<Text text-align="center">
						M
					</Text>
				</Box>
				<Box
					width="100px"
					height="100px"
					background="--color-lightD2"
					box-shadow="--l"
					display="flex"
					align-items="center"
					justify-content="center"
				>
					<Text text-align="center">
						L
					</Text>
				</Box>
				<Box
					width="100px"
					height="100px"
					background="--color-lightD2"
					box-shadow="0 20px 25px -5px --color-primary"
					display="flex"
					align-items="center"
					justify-content="center"
				>
					<Text text-align="center">
						XL
					</Text>
				</Box>
				<Box
					width="100px"
					height="100px"
					background="--color-lightD2"
					box-shadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
					display="flex"
					align-items="center"
					justify-content="center"
				>
					<Text text-align="center">
						XXL
					</Text>
				</Box>
			</Box>
			<Box display="flex" width="100%" justify-content="space-between" margin="0px 0px 70px 0px">
				<Text
					as="h2"
					font="--headline3"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="1px 1px 2px --color-primary"
				>
					Med
				</Text>
				<Text
					as="h2"
					font="--headline2"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="3px 3px 2px rgba(0, 119, 204, 0.3)"
				>
					Large
				</Text>
				<Text
					as="h2"
					font="--headline1"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="5px 5px 6px rgba(0, 119, 204, 0.3)"
				>
					XL
				</Text>
				<Text
					as="h2"
					font="--headline1"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="2px 2px 0px #ffffff,4px 5px 1px rgba(0, 119, 204, 0.3)"
				>
					Double
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="space-between" margin="0px 0px 70px 0px">
				<Text
					as="h2"
					font="--headline3"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="1px 1px 2px rgba(0, 119, 204, 0.3)"
					color="--greyD2"
				>
					Medium
				</Text>
				<Text
					as="h2"
					font="--headline2"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="3px 3px 2px rgba(0, 119, 204, 0.3)"
					color="--greyD2"
				>
					Large
				</Text>
				<Text
					as="h2"
					font="--headline1"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="5px 5px 6px rgba(0, 119, 204, 0.2)"
					color="--greyD2"
				>
					Extra large
				</Text>
				<Text
					as="h2"
					font="--headline1"
					md-font="--headline2"
					margin="20px 0 0 0"
					text-shadow="2px 2px 0px #ffffff,4px 5px 0px rgba(0, 119, 204, 0.3)"
					color="--greyD2"
				>
					Double
				</Text>
			</Box>
			<Text font="normal 300 80px/1.5 --fontFamily-mono" width="1.7ch" white-space="nowrap" overflow-x="hidden">
				🍔🍔🍔🍔
		1234
			</Text>
			<Button font="--lead" margin="20px" text-shadow="1px 1px 2px rgba(25, 30, 34, 0.3)">
				Button
			</Button>
		</Section>
		<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
			<Text
				as="h4"
				font="--base"
				color="--grey"
				letter-spacing="1px"
				text-transform="uppercase"
				margin="6px 0"
			>
				About me
			</Text>
			<Text as="h2" font="--headline2" margin="0 0 12px 0">
				Работа с компонентами
			</Text>
			<Text font="--base">
				Работа с компонентами
			</Text>
		</Box>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<StackItem width="50%" lg-width="100%">
				<Override
					slot="StackItemContent"
					margin-right="-20%"
					padding-bottom="120%"
					background="url(https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) 50% 15%/cover"
					lg-margin-right="0"
					lg-padding-bottom="80%"
				/>
			</StackItem>
			<StackItem width="50%" lg-width="100%">
				<Override
					slot="StackItemContent"
					padding="98px 64px"
					margin-left="-20%"
					margin-top="36px"
					background="--color-red"
					color="--light"
					mix-blend-mode="lighten"
					lg-margin-left="0"
					lg-margin-top="0"
					flex-direction="column"
				/>
				<Text
					as="h4"
					margin="0"
					font="--base"
					letter-spacing="1px"
					text-transform="uppercase"
				>
					About me
				</Text>
				<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
					Hey I’m David
				</Text>
				<Text as="p" margin="16px 0" font="--base" max-width="400px">
					фывфыв
				</Text>
			</StackItem>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack />
		</Section>
		<Stack>
			{"        "}
			<StackItem width="50%" display="flex">
				<Text font="--headline2" margin="0px 0px 0px 0px" display="inline-block">
					Фывфы ыва ыва  ы в ыфв фы фыфыфы  фыв{" "}
				</Text>
			</StackItem>
			<StackItem width="50%" display="flex">
				{"        "}
				<Text font="--headline2" margin="0px 0px 0px 0px" display="inline-block" width="100%">
					asdAsdasd
				</Text>
				{"    "}
			</StackItem>
		</Stack>
		<Section>
			<Box margin="0px 0px 0px 0px" />
		</Section>
		<List list-style-type="disc">
			<Icon category="md" icon={MdFace} />
			<Text>
				First item
			</Text>
			<Text>
				First item
			</Text>
			<Text>
				First item
			</Text>
			<Text>
				First item
			</Text>
		</List>
		<Image width="64px" height="64px" />
		<Image width="64px" height="64px" />
		<Menu>
			<Override slot="link" color="--green" />
		</Menu>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});