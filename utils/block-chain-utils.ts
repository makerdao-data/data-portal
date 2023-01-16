export function addressShortener(address: string) {
  if (address.length > 8) {
    return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
  }

  return address;
}
