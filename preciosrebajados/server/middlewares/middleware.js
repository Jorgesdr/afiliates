export default function trackingMiddleware (req, res, next) {
  // Track the request
  console.log(`Request received: ${req.method} ${req.url}`)

  // Revise user cookies
  if (req.cookies && req.cookies.user) {
    const user = req.cookies.user
    console.log(`User ${user} revising cookies...`)
    // revise cookies here
  }

  // Call the next middleware
  next()
}
