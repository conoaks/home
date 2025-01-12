curl -X POST \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxYzRkOGVkMjgyNzg0OWFlODUyMDE1ODdiOWMyMGViYyIsImlhdCI6MTczNDIxNjY4MiwiZXhwIjoyMDQ5NTc2NjgyfQ.hA9YrWb2k1uwIIJF78Jn2xdf7n3FJltQ3vziqQYoYxI" \
  -H "Content-Type: application/json" \
  -d '{"entity_id": "media_player.conners_tv"}' \
  http://10.0.0.31:8123/api/services/media_player/volume_up
