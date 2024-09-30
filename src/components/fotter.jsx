function Footer() {
  return (
    <div id="footer" style={{ margin: "0px" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          color: "white",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <a
          href="https://ag-solutions.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          &copy; Copyright 2024 AG Solutions. All rights reserved.
        </a>

        <p
          style={{
            color: "white",
            margin: 0,
            textAlign: "center",
            marginRight: "35px",
          }}
          className="visitor-count"
        >
          Visitors No: {localStorage.getItem("visitorCount")}
        </p>
      </div>

      <style>
        {`
          @media(min-width: 768px) {
            .container {
              flex-direction: row; 
              justify-content: space-between; 
            }

            .visitor-count {
              position: absolute;
              right: 0; 
              margin-right: 20px;
              text-align: right;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
