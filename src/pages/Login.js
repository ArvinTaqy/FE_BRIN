import React from 'react'

function Login() {
  return (
    <div>
        <body>

            <main>
                <div className="container">

                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                        <div className="d-flex justify-content-center py-4">
                            <a href="/" className="logo d-flex align-items-center w-auto">
                            <img src="/images/logo/Alt_Logo_BRIN.png" alt=""></img>
                            </a>
                        </div>

                        <div className="card mb-3">

                            <div className="card-body">

                            <div className="pt-4 pb-2">
                                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                <p className="text-center small">Enter your username & password to login</p>
                            </div>

                            <form className="row g-3 needs-validation" novalidate>

                                <div className="col-12">
                                <label for="yourUsername" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" name="username" className="form-control" id="yourUsername" required></input>
                                    <div className="invalid-feedback">Please enter your username.</div>
                                </div>
                                </div>

                                <div className="col-12">
                                <label for="yourPassword" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="yourPassword" required></input>
                                <div className="invalid-feedback">Please enter your password!</div>
                                </div>

                                <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"></input>
                                    <label className="form-check-label" for="rememberMe">Remember me</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <button className="btn btn-primary w-100" type="submit">Login</button>
                                </div>
                                <div className="col-12">
                                <p className="small mb-0">Don't have account? <a href="Register">Create an account</a></p>
                                </div>
                            </form>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </section>

                </div>
            </main>
        </body>
    </div>
  )
}

export default Login