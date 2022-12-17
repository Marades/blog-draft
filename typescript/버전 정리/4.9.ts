namespace version_4_9 {
	namespace satisfies1 {
		const palette = {
			red: [255, 0, 0],
			green: "#00ff00",
			bleu: [0, 0, 255],
			//  ^^^^ sacrebleu - we've made a typo!
		};

		// We want to be able to use array methods on 'red'...
		const redComponent = palette.red.at(0);

		// or string methods on 'green'...
		const greenNormalized = palette.green.toUpperCase();
	}

	namespace satisfies2 {
		type Colors = "red" | "green" | "blue";

		type RGB = [red: number, green: number, blue: number];

		const palette: Record<Colors, string | RGB> = {
			red: [255, 0, 0],
			green: "#00ff00",
			bleu: [0, 0, 255],
			//  ~~~~ The typo is now correctly detected
		};

		// But we now have an undesirable error here - 'palette.red' "could" be a string.
		const redComponent = palette.red.at(0);
	}
}
