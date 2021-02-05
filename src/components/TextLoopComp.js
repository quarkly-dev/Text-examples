import React from 'react';
import atomize from "@quarkly/atomize";
import TextLoop from "react-cypher-text-loop";
import { Text } from "@quarkly/widgets";

const TextLoopComp = props => <TextLoop {...props} textList={['React', 'Cypher', 'Text', 'Loop']}>
	<Text>
		First
	</Text>
	<Text>
		Second
	</Text>
	<Text>
		Third
	</Text>
</TextLoop>;

export default atomize(TextLoopComp)({
	name: "TextLoopComp",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "TextLoopComp — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});