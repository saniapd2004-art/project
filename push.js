 // Replace YOUR_USERNAME with your GitHub username
 const{ execSync } = require("child_process");
 try{
    execSync(
        "git remote add origin https://github.com/MELVINA-DAVIS/day1-js-basics.git",
        { stdio: "inherit" }
    );

    execSync("git push -u origin main", { stdio: "inherit" });

    console.log("Code pushed successfully!");
}catch (error) {
    console.log("Error:", error.message);
}