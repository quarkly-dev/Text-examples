import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { StackItem, Stack, Section, Override, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Text font="--headline3">
			Gap 10px
		</Text>
		<Text font="--lead" margin="36px 0px 16px 0px">
			without-margin
		</Text>
		<Components.TextLoopComp />
		<Stack background="--color-light" gap="20px" margin="0px 0px 0px 0px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Не могу начать писать прям с угла :(
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
		<Stack background="--color-light" gap="50px" margin="0px 0px 0px 0px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Не могу начать писать прям с угла :(
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
		<Section>
			<Text font="--headline1" margin="36px 0px 46px 0px">
				with-margin
			</Text>
			<Stack background="--color-light" gap="39px">
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
			</Stack>
			<Stack background="--color-light" gap="20px" margin="40px -10px -10px -10px">
				<StackItem width="25%" background="--color-orange" height="100px">
					<Text margin="0px 0px 0px 0px">
						Начинаю писать текст прям с угла
					</Text>
				</StackItem>
				<StackItem width="25%" background="--color-secondary" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
			</Stack>
		</Section>
		<Section>
			<Text font="--headline1" margin="36px 0px 16px 0px">
				with-margin
			</Text>
			<Stack gap="60px" margin="0px 0px 0px 0px">
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
			</Stack>
			<Stack background="--color-light" gap="40px" margin="0px 0px 0px 0px">
				<StackItem width="25%" background="--color-orange" height="100px">
					<Text margin="0px 0px 0px 0px">
						Начинаю писать текст прям с угла
					</Text>
				</StackItem>
				<StackItem width="25%" background="--color-secondary" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
			</Stack>
		</Section>
		<Text font="--headline3" margin="36px 0px 16px 0px">
			Gap 50px
		</Text>
		<Text font="--lead" margin="36px 0px 16px 0px">
			without-margin
		</Text>
		<Stack background="--color-light" gap="50px" margin="0px 0px 0px 0px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Не могу писать прям с угла
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
		<Text font="--lead" margin="36px 0px 16px 0px">
			with-margin
		</Text>
		<Stack background="--color-light" gap="40px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Начинаю писать текст прям с угла
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
		<Box>
			<Menu depth="2">
				<Override slot="link-404" background="red" />
			</Menu>
		</Box>
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