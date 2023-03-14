export default function chartsRgbColorPallete(alpha?: number) {
  const colors = [
    'rgba(252, 216, 163, 1)',
    'rgba(242, 184, 97, 1)',
    'rgba(240, 214, 84, 1)',
    'rgba(90, 201, 182, 1)',
    'rgba(196, 223, 240, 1)',
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
