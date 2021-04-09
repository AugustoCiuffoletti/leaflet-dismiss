# Step 6: save in the cloud

We need to identify a service fitting our needs. In essence, we need to store in the cloud an array of data, the coordinates of the markers.

Since the data structure is of limited size and complexity, we opt for a very simple *KVaaS* (key-value as a service), which allows to store a single string associated to a URL (the *key*). The string may be quite long, up to a MByte. To implement our cloud store we will pack the array of coordinates in a single JSON string.

The service we are going to use is available at https://keyvalue.xyz/, where you find the ten-lines-long documentatin for the service. With a *POST* request to a well known URL you obtain the personal URL that serves as a key to access your storage. With a *POST* to the personal URL you upload your string, with a *GET* you download it.

The curl command line utility is useful to produce *GET* and *POST* requests from the commandline. It is of immediate installation on any Operating System, and the command to obtain a personal URL is

  curl -X POST https://api.keyvalue.xyz/new/myKey

You can replace the string "myKey" with anything at your choice. In response you will receive a URL in the form

  https://api.keyvalue.xyz/XXXXXXXX/myKey

that you can use to upload/download your string value.

To store the coordinates and the index of our markers we perform two steps: the array is first encoded as a JSON string, the string is uploaded with a POST to the personal URL. On the interface, we need a box containing the personale URL, and a button to trigger the store operation.

The input box is 