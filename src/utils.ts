export function getFirstPathSegment(url: string) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  if (pathSegments.length > 0) {
    return pathSegments[0];
  }
  return "/";
}
