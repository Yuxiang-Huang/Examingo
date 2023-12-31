function prepare_prisma_client_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf lambda-layer

  echo "Creating layer ..."
  mkdir -p lambda-layers/BeautifulSoup
  mkdir -p lambda-layers/summarize

  echo "Prepare lambda layer ..."
  cp -r .venv/lib/python3.11 lambda-layers/BeautifulSoup
  cp -r lambda-layers/summarize

  popd
}
prepare_prisma_client_lambda_layer