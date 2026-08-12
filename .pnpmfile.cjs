module.exports = {
  hooks: {
    readPackage(pkg) {
      // Force pnpm to allow build scripts for these specific packages
      if (pkg.name === 'bcrypt' || pkg.name === 'sharp' || pkg.name === 'bufferutil') {
        pkg.pnpm = pkg.pnpm || {};
        pkg.pnpm.neverBuiltDependencies = [];
      }
      return pkg;
    }
  }
};