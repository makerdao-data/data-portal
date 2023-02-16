export default function chartsRgbColorPallete(alpha?: number) {
  const colors = [
    'rgba(250, 220, 189, 1)',
    'rgba(39, 180, 189, 1)',
    'rgba(134, 209, 252, 1)',
    'rgba(210, 81, 224, 1)',
    'rgba(246, 114, 138, 1)',
    'rgba(242, 244, 126, 1)',
    'rgba(137, 137, 224, 1)',
    'rgba(232, 151, 125, 1)',
    'rgba(215, 77, 77, 1)',
    'rgba(213, 240, 245, 1)',
    'rgba(106, 154, 197, 1)',
    'rgba(109, 109, 109, 1)',
    'rgba(250, 134, 252, 1)',
    'rgba(218, 49, 130, 1)',
    'rgba(251, 204, 95, 1)',
    'rgba(0, 192, 156, 1)',
    'rgba(24, 239, 123, 1)',
    'rgba(68, 68, 226, 1)',
    'rgba(250, 114, 84, 1)',
    'rgba(255, 205, 223, 1)'
  ];

  if (alpha) {
    return colors.map((color) => color.replace('1)', alpha + ')'));
  }

  return colors;
}
