const themeSelector = document.getElementById("themeSelector");
const themeElement = document.getElementById("theme");

{
	const theme = window.localStorage.getItem("theme");
	if (theme !== null)
	{
		themeSelector.value = theme;
		themeElement.href = `/internal/css/${theme}.css`;
	} else
	{
		themeSelector.value = "dark";
	}
}

themeSelector.addEventListener("change", () =>
{
	const theme = themeSelector.value;
	const themeFile = `/internal/css/${theme}.css`;

	window.localStorage.setItem("theme", theme);
	themeElement.href = themeFile;
});
