import app from './app';

// Using port 3000; this may make sense to be a configuration variable
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
