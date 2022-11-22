export function JsonResponse(body: Record<string, any>, statusCode: number) {
  return {
    statusCode,
    body: JSON.stringify(body, null, 2)
  }
}