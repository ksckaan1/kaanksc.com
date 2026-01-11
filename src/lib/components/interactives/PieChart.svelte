<script lang="ts">
	import { Mermaid } from "@friendofsvelte/mermaid";

	type Elem = {
		title: string;
		value: number;
		color: string;
	};

	interface Props {
		value: Elem[];
		title?: string;
	}

	let { value = [], title = "" }: Props = $props();

	const config = {
		theme: "dark",
		flowchart: {
			useMaxWidth: true,
			htmlLabels: true,
		},
	};

	let colors = "";

	value.forEach((elem, i) => {
		colors += `\n		'pie${i + 1}' : '${elem.color}',`;
	});

	let val = `
		%%{
    init: {
      'theme': 'dark',
      'themeVariables': {${colors}
        'pieStrokeColor': '#1B2026',
        'pieStrokeWidth': '5px',
        'pieOuterStrokeWidth': '0px',
        'pieOuterStrokeColor': '#1B2026',
        'pieOpacity': '1'
      }
    }
  }%%
  pie ${title ? "title " + title : ""}`;

	value?.forEach((elem) => {
		val += `\n	"${elem.title}" : ${elem.value}`;
	});
</script>

<Mermaid string={val} {config} />
