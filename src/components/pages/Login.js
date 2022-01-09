function Login(){
    return(
        <main className="form-signin">
        <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                

                <div className="form-floating">
                   
                    <input type="email" className="form-control" placeholder="Enter email" />
                    <label>Email</label>
                </div>

                <div className="form-floating">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="w-100 btn btn-lg btn-primary">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/register">Register</a>
                </p>
            </form>
            </main>
    );
}

export default Login;