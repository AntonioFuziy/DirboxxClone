import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { NextApiRequest, NextApiResponse } from 'next'

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN
    })
  ],
}

export default (req:NextApiRequest, res:NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);