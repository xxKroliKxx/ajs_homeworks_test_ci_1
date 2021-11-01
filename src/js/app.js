export default function healthLevel(object) {
  if (object.health > 50) {
    return 'healthy';
  } if (object.health < 50 && object.health > 15) {
    return 'wounded';
  }
  return 'critical';
}

healthLevel({ health: 50, name: 'xxKroliKxx' });
